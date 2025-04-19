import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-purple-900 font-sans">
      <header className="text-center py-12 bg-white shadow-md rounded-b-2xl">
        <h1 className="text-5xl font-extrabold text-pink-600">NellyNails 💅</h1>
        <p className="mt-3 text-xl text-purple-700">טיפוח ברמה אחרת – לק ג'ל, פדיקור, בנייה ועוד</p>
      </header>
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 my-10">
        <h2 className="text-3xl font-bold mb-6 text-pink-500 border-b-2 border-pink-300 pb-2">💜 השירותים שלנו</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-purple-800">
          <li>✨ לק ג'ל (כולל חיזוקים)</li>
          <li>🦶 פדיקור מקצועי</li>
          <li>💅 בניית ציפורניים בכל הסגנונות</li>
          <li>🎨 תיקונים וקישוטים ייחודיים</li>
          <li>🛁 טיפולי ספא מפנקים לרגליים</li>
        </ul>
      </section>
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 my-10">
        <h2 className="text-3xl font-bold mb-6 text-purple-500 border-b-2 border-purple-300 pb-2">📸 גלריה</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img src="https://via.placeholder.com/250x250?text=לק+ג'ל" alt="גלריה 1" className="rounded-2xl shadow-md hover:scale-105 transition" />
          <img src="https://via.placeholder.com/250x250?text=פדיקור" alt="גלריה 2" className="rounded-2xl shadow-md hover:scale-105 transition" />
          <img src="https://via.placeholder.com/250x250?text=בנייה" alt="גלריה 3" className="rounded-2xl shadow-md hover:scale-105 transition" />
        </div>
      </section>
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 my-10">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-2 border-pink-300 pb-2">📅 קביעת תור</h2>
        <form className="grid gap-6">
          <input type="text" placeholder="שם מלא" className="p-4 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <input type="tel" placeholder="טלפון" className="p-4 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <input type="date" className="p-4 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <button type="submit" className="bg-pink-500 text-white py-3 rounded-2xl hover:bg-pink-600 transition">שלחי פנייה</button>
        </form>
      </section>
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 my-10">
        <h2 className="text-3xl font-bold mb-6 text-purple-500 border-b-2 border-purple-300 pb-2">🕒 שעות פעילות</h2>
        <p className="text-lg text-purple-800 leading-relaxed">
          ימים א'–ה': 9:00–14:00 וגם 16:00–20:00<br/>
          ימי שישי: 10:00–13:00
        </p>
      </section>
      <footer className="text-center py-8 text-sm text-purple-700 bg-white rounded-t-2xl shadow-inner">
        כל הזכויות שמורות ל־NellyNails &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
