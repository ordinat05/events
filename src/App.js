import "./App.css";
import React from "react";
// onClick, onChange,  onSubmit,  onFocus, onBlur,
// preventDefault(), stopPropagation()

function App() {
  return (
    <div className="App">
      <div
        onClick={() => {
          console.log("🖱 App divine tıklandı");
        }}
        className="App"
      >
        <h1>React Dersleri</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("⚡Form gönderildi");
          }}
        >
          isim:{" "}
          <input
            name="isim"
            onClick={(e) => {
              e.stopPropagation();
              console.log("🖱 inputa tıklandı");
            }}
            onFocus={() => {
              console.log("✅ imleç İnputun içinde");
            }}
            onBlur={(e) => {
              console.log("🛑 imleç artık İnput da değil. ");
              const name = e.target.value;
              if (name.length < 8) {
                alert("Sifre en az 8 karakterli olmalıdır");
              } else {
                alert("Sifre uzunluğu yeterlidir.");
              }
            }}
            onChange={(e) =>
              console.log(
                "input a yazıldı ✍",
                e.target.value,
                "input un adı ✍",
                e.target.name
              )
            }
          />
        </form>
        <hr></hr>
        {/* Merhaba
        <button className="btn btn-success">İsmi Değiştir</button>
        <button className="btn btn-primary">Mesajı Değiştir</button> */}
      </div>
    </div>
  );
}

export default App;
