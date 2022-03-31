import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

beforeEach(() => {
  render(<App />);
});

beforeAll(() => { });

afterEach(() => { });

afterAll(() => { });

const typeIntoForm = ({ email, password, confirmpassword }) => {
  const emailInputElement = screen.getByRole("textbox", { name: /email/i })
  const pwdInputElement = screen.getByLabelText("Password");
  const confirmPwdInputElement = screen.getByLabelText(/confirm password/i);

  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(pwdInputElement, password);
  }
  if (confirmpassword) {
    userEvent.type(confirmPwdInputElement, confirmpassword);
  }

  return {
    emailInputElement,
    pwdInputElement,
    confirmPwdInputElement
  }
};

const clickOnSubmitButton = () => {
  const submitBtnElement = screen.getByRole("button", {
    name: /valider/i
  });
  userEvent.click(submitBtnElement);
}

describe("Contrôle sur composant App", () => {

  test('renders login form', () => {
    expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("");
    expect(screen.getByLabelText("Password").value).toBe("");
    expect(screen.getByLabelText(/confirm password/i).value).toBe("");
  });

  test('Doit avoir un email', () => {
    const { emailInputElement } = typeIntoForm({ email: "test@gmail.com" })
    expect(emailInputElement.value).toBe("test@gmail.com");
  })

  test('Peut saisir un mdp', () => {
    const { pwdInputElement } = typeIntoForm({ password: "test123!" })
    expect(pwdInputElement.value).toBe("test123!");
  })

  describe("Erreur de saisie", () => {


    test("Erreur sur email invalide", () => {
      expect(screen.queryByText(/erreur de saisie sur l'email/i)).not.toBeInTheDocument();

      typeIntoForm({ password: "12345678" })

      typeIntoForm({ email: "test.gmail.com" })
      clickOnSubmitButton();

      expect(screen.queryByText(/erreur de saisie sur l'email/i)).toBeInTheDocument()
    })

    test("Le mdp doit avoir au moins 5 caractères", () => {
      expect(screen.queryByText(/le mdp doit avoir au minimum 4 caractères/i)).not.toBeInTheDocument();

      typeIntoForm({ password: "123" })
      clickOnSubmitButton();

      expect(screen.queryByText(/le mdp doit avoir au minimum 4 caractères/i)).toBeInTheDocument();
    })

  })
})