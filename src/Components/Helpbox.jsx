import React from 'react';

const HelpBox = () => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md max-w-md">
      <h2 className="bg-red-600 text-center text-white  text-2xl p-2 font-bold mb-4">Help Bot</h2>
      <div className="space-y-4">
        <p>Hey there! I am the StreamCast Automated Assistant. How can I help you today?</p>
        <button className="block w-full text-left bg-gray-100 p-2 rounded hover:bg-gray-200">I got locked out of my account</button>
        <button className="block w-full text-left bg-gray-100 p-2 rounded hover:bg-gray-200">How do I download videos for watching later?</button>
        <button className="block w-full text-left bg-gray-100 p-2 rounded hover:bg-gray-200">Can I stream videos to my Chromecast?</button>
        <button className="block w-full text-left bg-gray-100 p-2 rounded hover:bg-gray-200">I have a different question</button>
      </div>
    </div>
  );
};

export default HelpBox;

