export default function VisualizarAnuncio () {
    return(
        <div>
            Visualizar anuncio
        </div>
    )
}

export const config = {
    runtime: 'experimental-edge',
}

export async function getServerSideProps(context) {
    let dados = "server side"
    return {
      props: { dados }, // will be passed to the page component as props
    }
  }
  