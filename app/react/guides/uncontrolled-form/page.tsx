'use client'

import { type SandpackFiles } from '@codesandbox/sandpack-react'
import CustomSandpack from '../../custom-sandpack'
import { TextScrambleBasic } from '@/components/motion-primitives/text-scramble-basic'
export default function UncontrolledFormPage() {
  const files: SandpackFiles = {
    '/App.js': {
      code: `export default function MyForm() {
  function handleSubmit(e) {
    // Previene que el navegador recargue la página
    e.preventDefault();

    // Lee los datos del formulario
    const form = e.target;
    const formData = new FormData(form);

    // Puedes pasar formData como el cuerpo de la consulta directamente:
    fetch('/some-api', { method: form.method, body: formData });

    // O puedes trabajar con él como un objecto plano:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Input de texto: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Botones radio:
        <label><input type="radio" name="myRadio" value="option1" /> Opción 1</label>
        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Opción 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Opción 3</label>
      </p>
      <hr />
      <button type="reset">Reiniciar formulario</button>
      <button type="submit">Enviar formulario</button>
    </form>
  );
}
`,
      hidden: false,
      active: true,
      readOnly: true
    }
  }

  return (
    <div>
      <TextScrambleBasic className="font-mono text-3xl uppercase">
        Uncontrolled Form
      </TextScrambleBasic>

      <CustomSandpack files={files} />
    </div>
  )
}
