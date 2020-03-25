type Props = {
  children: React.ReactNode;
};

const Code: React.FC<Props> = ({ children }) => (
  <pre className="language-js">
    <code className="language-js">{children}</code>
  </pre>
);

export default Code;
