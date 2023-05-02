import './Login.css';
import logo from '../../logo.svg'

function Login() {
    return (
        <div>
            <div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <h1>Hola de nuevo</h1>
                    <form>
                        <label>Nickname</label><br />
                        <input type="text" name="" id="" /><br />
                        <label>Password</label><br />
                        <input type="text" name="" id="" /><br />
                        <button>Iniciar sesion</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
