"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log("iPadかPCの判定", document.ontouchstart);
  }, []);

  const next = () => {
    router.push("/step");
  };
  return (
    <main className="">
      <h1>GoogleAnalytics イベントの集計</h1>
      <div id="next-step" onClick={next} className="">
        <button>次へ進む</button>
      </div>
      <div>
        <a id="jump-yahoo" href="https://www.yahoo.co.jp/">
          <h3>yahoo</h3>
        </a>
      </div>
      <div className="h-52 bg-green-500 min-w-[200px] max-w-sm">
        <p>スクロールされたかどうか</p>
      </div>
      <div className="h-52 bg-blue-300">
        <p>スクロールされたかどうか</p>
      </div>
      <div className="h-52 bg-pink-300">
        <p>スクロールされたかどうか</p>
      </div>
      <div className="h-52 bg-red-500">
        <p>スクロールされたかどうか</p>
      </div>
      <div className="h-52 bg-yellow-300">
        <p>スクロールされたかどうか</p>
      </div>
      <div className="h-52 bg-blue-200">
        <p>スクロールされたかどうか</p>
      </div>
    </main>
  );
}
