import Navigation from "./navigation";

export default function Header() {
    return (
      <header>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: "6em" }}> Birdwatching</h1>
              </td>
              <td style={{ textAlign: 'right end' }}>
                <img src="dove.png" alt="a simple dove logo" style={{ width: '150px', height: 'auto' }} />
              </td>
            </tr>
          </tbody>
        </table>
        <Navigation />
      </header>
    );
}
