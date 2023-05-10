import React from "react";
import { logo } from '../assets';

const Hero = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '2rem',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '1rem',
          paddingTop: '0.5rem',
        }}
      >
        <img
          src={logo}
          alt="sumz_logo"
          style={{
            width: '7rem',
            objectFit: 'contain',
          }}
        />
        <button
          type="button"
          onClick={() =>
            window.open('https://github.com/Altheahanson/AI_SUMMERIZER', '_blank')
          }
          style={{
            backgroundColor: '#24292e',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          GitHub
        </button>
      </nav>
      <h1
        className="head_text"
        style={{
          fontSize: '2.25rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}
      >
        Summarize Articles with <br className="max-md:hidden" />
        <span
          className="orange_gradient"
          style={{
            background: 'linear-gradient(to right, #ffb347, #ffcc33)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          OpenAI GPT-4
        </span>
      </h1>
      <p
        className="desc"
        style={{
          fontSize: '1.25rem',
          textAlign: 'center',
        }}
      >
        Enter your text below to generate a summary.
      </p>
      {/* Rest of your component */}
    </header>
  );
};

export default Hero;