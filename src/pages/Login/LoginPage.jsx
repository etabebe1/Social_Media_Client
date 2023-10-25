import LoginForm from "../../components/LoginFrom/LoginForm";
import SiteNavBar from "../../components/NavForSite/SiteNavBar";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  return (
    <div>
      <SiteNavBar></SiteNavBar>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
}

// <div>
//   <FormContainer className="">
//     <form>
//       <div className="form_item_all">
//         <div className="main_form">
//           <div className="brand">
//             <img src={LogoDev} alt="Logo" />
//             <h1>Talk Time</h1>
//           </div>
//           <div className="form_item">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               min="3"
//             />
//             <label for="username">Username</label>
//           </div>
//           <div className="form_item">
//             <input type="password" name="password" placeholder="Password" />
//             <label for="password">Password</label>
//           </div>
//         </div>

//         <div className="form_submit">
//           <div className="loading">
//             <div className="chat_opening">Chat opening</div>

//             <img src={loading} alt="Loading..." />
//           </div>

//           <button className="btn" type="submit">
//             Login
//           </button>
//           <div className="have_acc">Don't have an account?</div>
//         </div>
//       </div>
//     </form>
//   </FormContainer>
// </div>

// const FormContainer = styled.div`

// height: 100vh;
// width: 100vw;

//   form {
//     border-radius: 20px;
//     background: var(--black-more);
//     backdrop-filter: blur(10px);
//     width: 40vw;
//     height: 60vh;
//     margin: 40px auto 0px;
//     padding: 48px;
//     overflow: hidden;
//     .form_item_all {
//       position: absolute;
//       background-color: var(--black-more);
//       inset: 5px;
//       z-index: 1;
//       border-radius: 18px;
//       padding-inline: 30px;

//       .main_form {
//         .brand {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin: 20px 0 20px;
//           gap: 10px;

//           img {
//             width: 50px;
//             height: 50px;
//           }
//           h1 {
//             color: var(--dark-cyan);
//             text-align: center;
//             letter-spacing: 2px;
//           }
//         }

//         .form_item {
//           margin-block: 30px;
//           display: flex;
//           flex-direction: column;

//           input {
//             background: transparent;
//             color: var(--whiten-white);
//             border: none;
//             border-bottom: solid 2px var(--dark-cyan);
//             width: 100%;
//             height: 30px;
//           }
//           input:focus {
//             outline: none;
//           }
//         }
//       }

//       .form_submit {
//         .loading {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin-block: 20px;
//           gap: 10px;

//           .chat_opening {
//             text-align: center;
//             font-size: 0.9rem;
//             color: var(--whiten-white);
//           }

//           img {
//             width: 15px;
//             height: 15px;
//           }
//         }

//         .btn {
//           width: 40%;
//           height: 34px;
//           font-size: 0.9rem;
//           text-transform: uppercase;
//           color: var(--white);
//           background: var(--dark-cyan);
//           border-radius: 5px;
//           border: none;

//           box-shadow: 5px 5px 20px var(--dark-cyan);
//           transition: 0.4s;
//         }

//         .btn:hover {
//           border: solid 2px var(--dark-cyan);
//           background: var(--black-more);
//         }

//         .have_acc {
//           text-transform: uppercase;
//           text-align: center;
//           font-size: 13px;
//           letter-spacing: 1px;

//           margin-block: 35px;
//           .login_link {
//             margin-left: 10px;
//             color: var(--dark-cyan);
//             text-decoration: none;
//             letter-spacing: 2px;
//           }
//         }
//       }
//     }
//   }

//   @keyframes animate {
//     to {
//       transform: rotate(360deg);
//     }
//   }

//   form::before {
//     content: "";
//     width: 55vw;
//     height: 60vh;
//     /* background: red; */
//     position: absolute;
//     top: -36%;
//     left: 50%;
//     transform-origin: bottom left;
//     background-image: linear-gradient(
//       to bottom,
//       transparent,
//       #a1c4fd,
//       #f6d365,
//       #ff9a9e
//     );
//     animation: animate 6s linear infinite;
//     animation-delay: -6s;
//     filter: blur(40px);
//   }

//   form::after {
//     content: "";
//     width: 55vw;
//     height: 60vh;
//     position: absolute;
//     top: 50%;
//     right: 50%;
//     transform-origin: top right;
//     background-image: linear-gradient(
//       to top,
//       transparent,
//       #a1c4fd,
//       #f6d365,
//       #ff9a9e
//     );

//     animation: animate 6s linear infinite;

//     filter: blur(40px);
//   }
// `;

export default LoginPage;
