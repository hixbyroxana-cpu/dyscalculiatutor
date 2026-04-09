const Footer = () => {
  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container text-center space-y-3">
        <p className="font-heading text-lg font-semibold">
          dyscalculia<span className="text-accent">.help</span>
        </p>
        <p className="text-sm text-primary-foreground/70">
          Building sustainable mathematical foundations — specialist long-term support
          by a PGCE & qualified teacher.
        </p>
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} dyscalculia.help — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
