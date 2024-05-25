import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Section from "./Section";

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, my name is Lucy
          </h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>📊 How to data analyse</li>
            <li>🧑‍🏫 How to learn</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">Much more than that.</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS, VueJS</li>
            <li>Tailwind</li>
          </ul>

          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>Python, Java, NodeJS, C#, C++</li>
            <li>MySQL,PostgreSQL</li>
            <li>AWS</li>
          </ul>

          <p className="mt-3">
            <b>Data Analyst & ML 🤖</b>
          </p>
          <ul className="leading-9">
            <li>NumPy, Pandas, scikit-learn, PyTorch</li>
            <li>Tableau</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hiring a junior position? Fall intern or New Graduate? Email me!
          </h1>
          <p className="text-gray-500">I am one of your best choices.</p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📧 <a href="mailto:xifangle99@gmail.com">xifangle99@gmail.com</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
