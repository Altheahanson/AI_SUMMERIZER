
import React from 'react';
import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col items-center w-full gap-2">
        <form
          className="relative flex flex-col items-center"
          onSubmit={() => {}}
          style={{ textAlign: 'center' }}
        >
          
          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
            style={{
              width: '50%',
              maxWidth: 'calc(100% - 2.5rem)',
              paddingLeft: '2.5rem',
            }}
          />
          <button
            type="submit"
            className="sumbit_btn"
            style={{
              marginTop: '0.5rem',
              marginRight: '0.5rem',
              alignSelf: 'flex-end',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
