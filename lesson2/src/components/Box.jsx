export default function Box({title,text,children,...rest}) {
    return(
        <div {...rest}>
            <h3>Titre : {title}</h3>
            <h4>Text : {text}</h4>
            <h4>contenue : {children}</h4>
            <hr/>
        </div>
    )
}