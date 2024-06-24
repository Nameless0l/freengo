"use client";
import { UserRole } from "@/helpers/constants";
import { useState } from "react";
import { FormField } from "./form-field";

// SignupForm component
const SignupForm = ({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div
      className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
      style={{ marginTop: "-100px", backdropFilter: "blur(30px)" }}
    >
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Authentifiez vous dès maintenant</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormField name="name" label="Nom" type="text" />
              <FormField name="email" label="Email" type="email" />
              {isRegistering && (
                <FormField name="tel" label="Numero de telephone" type="tel" />
              )}
              <FormField name="password" label="Mot de passe" type="password" />
              {isRegistering && (
                <FormField
                  name="password_confirm"
                  label="Confirmation de Mot de passe"
                  type="password"
                />
              )}

              {!isRegistering || (
                <div className="form-check d-flex mt-4 mb-4">
                  <input
                    className="form-check-input me-2"
                    type="radio"
                    value={UserRole.CUSTOMER}
                    id={UserRole.CUSTOMER}
                    name="role"
                  />
                  <label
                    className="form-check-label"
                    htmlFor={UserRole.CUSTOMER}
                  >
                    Se Connecter en tant que Client
                  </label>
                </div>
              )}

              {!isRegistering || (
                <div className="form-check d-flex mt-4 mb-4">
                  <input
                    className="form-check-input me-2"
                    type="radio"
                    value={UserRole.DRIVER}
                    id={UserRole.DRIVER}
                    name="role"
                  />
                  <label className="form-check-label" htmlFor={UserRole.DRIVER}>
                    Se Connecter en tant que Chauffeur
                  </label>
                </div>
              )}

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4"
              >
                {isRegistering ? "S'inscrire" : "Se connecter"}
              </button>
            </form>

            <div
              onClick={() => setIsRegistering(!isRegistering)}
              className="form-check d-flex mt-4 mb-4"
            >
              <label className="form-check-label" htmlFor={UserRole.DRIVER}>
                {isRegistering
                  ? "Vous avez déjà un compte ? Se connecter"
                  : "Vous n'avez pas encore de compte ? S'inscrire"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
