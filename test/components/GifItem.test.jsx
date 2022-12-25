import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas de snapshot en GifItem.jsx', () => { 

  const title = 'Saitama';
  const url = 'hhtps://one-punch.com/saitama.jpg'

  test('Debe concidir en snapshot', () => {

    const {container} = render (<GifItem title={title} url={url} />)
    expect ( container ).toMatchSnapshot();

  })

  test('debe de mostrar la imagen con el URL y el ALT indicadp', () => {
    render (<GifItem title={title} url={url} />)
    // expect( screen.getByRole('img'.src )).toBe( url )
    // expect( screen.getByRole('img'.src )).alt( url )
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  })

  test('debe mostrar el titulo en el componente', () => {
    render (<GifItem title={title} url={url} />)
    expect (screen.getByText( title )).toBeTruthy();
  })
})