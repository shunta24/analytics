"use client";
import { useRouter } from "next/navigation";

const Step = () => {
  const router = useRouter();

  const next = () => {
    router.push("/result");
  };

  const inquiry = () => {
    router.push("/step/c");
  };

  return (
    <>
      <div id="result-page" onClick={next}>
        <button>結果画面へ進む</button>
      </div>
      <div id="inquiry-page" onClick={inquiry}>
        <button>お問い合わせはこちら</button>
      </div>
    </>
  );
};

export default Step;
