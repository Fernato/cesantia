import React from 'react'
import registrar from '../../img/registrar.png'
import acceder from '../../img/acceder.png'
import imprimir from '../../img/imprimir.png'
import paga from '../../img/paga.png'
import nuevo from '../../img/nuevo.png'
import { Carga } from '../../helpers/Carga'

export const HomeScreen = () => {


    return (
      <div className="container col-md-8 py-5 ">
      <div className="titulo">
        <h1>Auxilio de Cesantias</h1>
        <h2>Ley 50 de 1990</h2>
        <p>Articulo 98 - Articulo 106</p>
      </div>
      <section>
          <h3>El auxilio de cesantía estará sometido a los siguientes regímenes:</h3>
          <p>1. El régimen tradicional del Código Sustantivo del Trabajo, contenido en el Capítulo VII, Título VIII, parte primera y demás disposiciones que lo modifiquen o adicionen, el cual continuará rigiendo los contratos de trabajo celebrados con anterioridad a la vigencia de esta Ley.</p>
          <p>
              2. El régimen especial que por esta Ley se crea, que se aplicará obligatoriamente a los contratos de trabajo celebrados a partir de su vigencia.
          </p>
      </section>
      <section>
          <h3>El régimen especial de auxilio de cesantía, tiene las siguientes características: </h3>
          <p>1. El 31 de diciembre de cada año se hará la liquidación definitiva de cesantía, por la anualidad o por la fracción correspondiente, sin perjuicio de la que deba efectuarse en fecha diferente por la terminación del contrato de trabajo.</p>
          <p>
              2. El empleador cancelará al trabajador los intereses legales del 12% anual o proporcionales por fracción, en los términos de las normas vigentes sobre el régimen tradicional de cesantía, con respecto a la suma causada en el año o en la fracción que se liquide definitivamente.
          </p>
          <p>
              3. El valor liquidado por concepto de cesantía se consignará antes del 15 de febrero del año siguiente, en cuenta individual a nombre del trabajador en el fondo de cesantía que el mismo elija. El empleador que incumpla el plazo señalado deberá pagar un día de salario por cada retardo.
          </p>
      </section>

      <section>
          <h3>El trabajador afiliado a un Fondo de Cesantía sólo podrá retirar las sumas abonadas en su cuenta en los siguientes casos:</h3>
          <p>1. Cuando termine el contrato de trabajo. En este evento la Sociedad Administradora entregará al trabajador las sumas a su favor dentro de los cinco (5) días siguientes a la presentación de la solicitud..</p>
          <p>2. En los eventos en que la legislación vigente autoriza la liquidación y pago de cesantía durante la vigencia del contrato de trabajo. El valor de la liquidación respectiva se descontará del saldo del trabajador desde la fecha de la entrega efectiva. </p>
          <p>3. Para financiar los pagos por concepto de matrículas del trabajador, su cónyuge, compañera o compañero permanente y sus hijos, en entidades de educación superior reconocidas por el Estado. En tal caso el Fondo girará directamente a la entidad educativa y descontará el anticipo del saldo del trabajador, desde la fecha de la entrega efectiva.</p>
          <p><b> 4. Mejoramiento o reparación de vivienda, esto debe estar respaldado por un profesional en el area de la construcción. </b></p>
      </section>

      <section>
          <h2>EN ESTE PUNTO LA EMPRESA FERNEY</h2>
          <p>Te acompaña en los tramites para el retiro de la cesantia.</p>
          <p>Como profesional de la construcción haremos un Contrato y un Presupuesto del mejoramiento o reparacion de la vivienda, para que la presentes en el Fondo de cesantias y puedas retirar tus censatias.</p>

      </section>
      <div className="pasos">
        <br/><br/>
        <h2>¡SOLO SIGUE ESTOS PASOS!</h2>
        <br/><br/>
        <div className="row">
          <article className="col-sm-12 col-md-6 col-lg-3 col-xl-3 articulo">   

            <a href="/registrarse"><img src={registrar} alt="Registrar" /></a>           
            <p>REGISTRARTE</p>
          </article>
            
          <article className="col-sm-12 col-md-6 col-lg-3 col-xl-3  articulo">
              <a href="usuario/login"><img src={acceder}  alt="Accede" /></a>
              <p>ACCEDE Y REGISTRA EL MONTO</p>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-3 col-xl-3  articulo">
              <img src={paga}  alt="Paga" />
              <p>CANCELA</p>
          </article>
          <article className="col-sm-12 col-md-6 col-lg-3 col-xl-3  articulo">
            <a><img src={imprimir}  alt="Imprime" /></a>
              <p>IMPRIME LOS DOCUMENTOS</p>
          </article>
               
        </div>
        <br/><br/>
      </div>

      <Carga/>
    </div> 


    
    )
}
