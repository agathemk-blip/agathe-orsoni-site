"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const subjects = [
  "Stratégie digitale",
  "Intégration de l'IA",
  "Création / refonte de site",
  "Accompagnement long terme",
  "Formation équipe",
  "Autre",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      setErrorMsg(
        "Une erreur réseau est survenue. Veuillez réessayer ou me contacter directement."
      );
      setStatus("error");
    }
  };

  const inputStyles = {
    background: "#FFFFFF",
    border: "1px solid #E5E0D8",
    borderRadius: "10px",
    padding: "14px 16px",
    fontSize: "14px",
    color: "#1A1A1A",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyles = {
    display: "block",
    fontSize: "12px",
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    color: "#6B6B6B",
    marginBottom: "8px",
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "#F4F1EC", border: "1px solid #C4A882" }}
        >
          <span style={{ color: "#9B7D5E", fontSize: "1.5rem" }}>✓</span>
        </div>
        <h3
          className="text-xl font-medium mb-3"
          style={{ color: "#1A1A1A" }}
        >
          Message envoyé !
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#6B6B6B", maxWidth: "360px", margin: "0 auto" }}
        >
          Merci pour votre message. Je le lirai avec attention et vous
          répondrai dans les meilleurs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium hover:underline"
          style={{ color: "#9B7D5E" }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2
        className="text-lg font-medium mb-8"
        style={{ color: "#1A1A1A" }}
      >
        Demander un accompagnement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Nom */}
        <div>
          <label htmlFor="name" style={labelStyles}>
            Nom <span style={{ color: "#9B7D5E" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            style={inputStyles}
            onFocus={(e) => {
              e.target.style.borderColor = "#9B7D5E";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#E5E0D8";
            }}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyles}>
            Email <span style={{ color: "#9B7D5E" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            style={inputStyles}
            onFocus={(e) => {
              e.target.style.borderColor = "#9B7D5E";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#E5E0D8";
            }}
          />
        </div>
      </div>

      {/* Entreprise */}
      <div className="mb-5">
        <label htmlFor="company" style={labelStyles}>
          Entreprise <span style={{ color: "#C4A882", fontWeight: 400 }}>(optionnel)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          placeholder="Nom de votre entreprise"
          style={inputStyles}
          onFocus={(e) => {
            e.target.style.borderColor = "#9B7D5E";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#E5E0D8";
          }}
        />
      </div>

      {/* Sujet */}
      <div className="mb-5">
        <label htmlFor="subject" style={labelStyles}>
          Sujet <span style={{ color: "#9B7D5E" }}>*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          style={{ ...inputStyles, cursor: "pointer", appearance: "none" as const }}
          onFocus={(e) => {
            (e.target as HTMLSelectElement).style.borderColor = "#9B7D5E";
          }}
          onBlur={(e) => {
            (e.target as HTMLSelectElement).style.borderColor = "#E5E0D8";
          }}
        >
          <option value="" disabled>
            Choisissez un sujet
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mb-7">
        <label htmlFor="message" style={labelStyles}>
          Votre message <span style={{ color: "#9B7D5E" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet, votre situation, vos enjeux... Plus vous êtes précis, mieux je peux évaluer comment vous aider."
          style={{ ...inputStyles, resize: "vertical", minHeight: "140px" }}
          onFocus={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor = "#9B7D5E";
          }}
          onBlur={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor = "#E5E0D8";
          }}
        />
      </div>

      {/* Erreur */}
      {status === "error" && (
        <div
          className="mb-5 p-4 rounded-xl text-sm"
          style={{
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            color: "#991B1B",
          }}
        >
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full font-medium rounded-full transition-all duration-200"
        style={{
          background: status === "loading" ? "#9B7D5E" : "#1A1A1A",
          color: "#FFFFFF",
          padding: "16px 24px",
          fontSize: "14px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer mon message"}
      </button>

    </form>
  );
}
