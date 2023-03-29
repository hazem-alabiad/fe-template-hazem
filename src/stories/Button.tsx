import "./button.css";

interface ButtonProps {
  /**
   * is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * what background color to use
   */
  backgroundColor?: string;
  /**
   * how large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * button contents
   */
  label: string;
  /**
   * optional click handler
   */
  onClick?: () => void;
}

/**
 * primary UI component for user interaction
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
