import { render, h } from 'https://cdn.skypack.dev/preact';
import { useEffect, useRef } from 'https://cdn.skypack.dev/preact/hooks';

const Scope = () => {
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 50, 0, 2 * Math.PI);
    context.fill();
  }, [])

  return h("canvas", { ref })
}

render(h(Scope), document.getElementById("app"))