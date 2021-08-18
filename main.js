import { render, h } from 'https://cdn.skypack.dev/preact';
import { useEffect, useRef } from 'https://cdn.skypack.dev/preact/hooks';

const resize = canvas => {
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
}

const draw = canvas => {
  const context = canvas.getContext("2d");

  context.beginPath();
  context.arc(
    Math.floor(canvas.width / 2), 
    Math.floor(canvas.height / 2),
    50,
    0,
    2 * Math.PI
  );
  context.fill();
}

const Scope = () => {
  let ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    resize(canvas)
    draw(canvas)

    const onResize = () => {
      resize(canvas)
      draw(canvas)  
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [ref.current])

  return h("canvas", { ref })
}

render(h(Scope), document.getElementById("app"))