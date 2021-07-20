const d = document;
let contadorTareas = 0;


const crearTarea = (nombreTarea, template) => {
    const $template = d.getElementById(template).content,
        $fragment = d.createDocumentFragment(),
        $listaTareas = d.querySelector(".todos");

    contadorTareas++;
    $template.querySelector("span").textContent = nombreTarea;
    $template.querySelector("label").setAttribute("for", contadorTareas);
    $template.querySelector("input").setAttribute("id", contadorTareas);
    $template.querySelector("img").setAttribute("data-id", contadorTareas);

    let $clone = d.importNode($template, true);
    let $primerElemento = $listaTareas.querySelector(`label[for='${contadorTareas - 1}']`);
    $fragment.appendChild($clone);

    if($primerElemento) $listaTareas.insertBefore($fragment, $primerElemento);
    else $listaTareas.appendChild($fragment);
}

const leerInput = (selec) => {
    d.addEventListener("keyup", e => {
        if(e.key !== "Enter") return;
        const $input = d.querySelector(selec);
        const valorInput = $input.value;

        $input.value = null;
        crearTarea(valorInput, "temp-todo");
    });
};

const eliminarTarea = (selecElem, selecLista) => {
    d.addEventListener("click", e => {
        if(e.target.matches(selecElem)){
            const $idElemento = e.target.getAttribute("data-id"),
                $elemento = d.querySelector(`label[for='${$idElemento}']`),
                $lista = d.querySelector(selecLista);

            $lista.removeChild($elemento);
        }
    });
}

const filtrarTareas = (selec) => {
    d.addEventListener("click", e => {
        if(e.target.matches(selec)){
            const filtros = {
                todo(){
                    mostrarElementos("todos__elem", "todos");
                },
                pendiente(){

                },
                hecho(){

                }
            }
            
            console.log(filtros[e.target.value]);
        }
    });
}

const mostrarElementos = (selecElem, selecLista, bandera=null) => {
    const $elemento = d.querySelectorAll(selecElem),
        $lista = d.querySelector(selecLista);

    if(bandera === null){

    }
    if(bandera === 1){

    }
}

d.addEventListener("DOMContentLoaded", e => {
    leerInput(".main__input");
    eliminarTarea(".todos__close", ".todos");
    filtrarTareas(".nav__radio");
});