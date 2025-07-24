import React from "react";

export default function ContactUsGooglemapSection() {
  return (
    <>
      <div className="mt-10 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9858387793227!2d-74.0063936!3d40.741895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f3f6fb%3A0x3fc8d191a577bdf8!2sGoogle%20NYC%20-%209th%20Avenue!5e0!3m2!1sen!2sin!4v1696249224206!5m2!1sen!2sin"
          width="100%"
          height="307"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
