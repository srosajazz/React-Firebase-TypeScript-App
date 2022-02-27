/* eslint-disable jsx-a11y/img-redundant-alt */
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home(){
  return(
    <div>
      <aside>
        <img src={illustrationImg} alt="Side Image" />
        <strong>Create live Q&amp;A rooms </strong>
        <p>Answer any question on real time of your customers</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            <img src={googleIconImg} alt="Google Logo" />
          Create live Q&amp;A rooms with Google
          </button>
          <div>or enter in one room</div>
          {/* form */}
          <form>
            <input
             type="text" 
             placeholder="Type room code"
             />
             <button>
               Enter in the Q&Amp;A room
             </button>
          </form>
        </div>
      </main>
    </div>
  )
}