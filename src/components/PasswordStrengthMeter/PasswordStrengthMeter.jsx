import './index.css';

export const PasswordStrengthMeter = ({ password, ...props }) => {
  const easyPattern = /^([a-zA-Z]+|\d+|[\W_]+)$/;
  const mediumPattern =
    /^(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-zA-Z])(?=.*\d)|(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/;
  const strongPattern = /^(?=.*[a-zA-Z])(?=.*[\W_])(?=.*\d).*$/;

  const strength = () => {
    if (password === '') {
      return 'grey';
    } else if (password.length < 8) {
      return 'red';
    } else if (strongPattern.test(password)) {
      return 'strong';
    } else if (mediumPattern.test(password)) {
      return 'medium';
    } else if (easyPattern.test(password)) {
      return 'easy';
    }
  };

  return (
    <>
      <div className={`strength-indicator ${strength()}`} {...props}>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
      </div>
    </>
  );
};
