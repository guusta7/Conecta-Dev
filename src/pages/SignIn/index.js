import React , {useState} from 'react' ;

import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios'

import authService from '../../services/authService'
import FormHelperText  from '@material-ui/core/FormHelperText';
import {useSelector, useDispatch} from 'react-redux'
import {signIn} from '../../actions/accountActions'

const useStyles = makeStyles((theme) => ({
     
       root: {
      height: '100vh'
      },
      image: {
          backgroundImage: 'url(/images/background.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          padding: theme.spacing(2),
          textAlign: 'center'
      },
      avatar: {
        background: theme.palette.primary.main ,
        marginBottom: theme.spacing(1)

      },
      button: {
          marginTop: theme.spacing(1)
      },
      form: {
          margin: theme.spacing(2, 4)
      }



      // left: {
      //     background: 'blue',
      //   flexGrow: 0,
      //   flexBasis: '58%',
      // display: 'flex',
      // flexDirection: 'column',
      //  justifyContent: 'center',
      //  alignItems: 'center',
      //   },
    
      // right: {
      //     background: 'yellow',
      //    flexGrow: 0,
      //    flexBasis: '42%'
      // },
      // form: {
      //    display: 'flex',
      //    flexDirection: 'column',
      //    margin: '64px 32px',
      //    alignItems: 'center'
      // }
}))
function Copyright() {
    return (
        <Typography variant="body2" align="center">
     
      {'Copyright © '}
      <a
        color="inherit"
        href="https://github.com/guusta7/Conecta-Dev"
      >
        Guusta
      </a>{' '}
      {new Date().getFullYear()}




        </Typography>
    )
}


function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch();

    
    
   
      



  async function handleSignIn() {
        // chamada a API
        // se retorno ok, direciona para home
        // senao exibe mensagem para o usuario

            try{
                    await dispatch(signIn(email, password));
                    navigate('/') 
                
            } catch(error) {
               
                setErrorMessage(error.response.data.message)
            }
  }
  


    return (


            <Grid container className={classes.root}>
                <Grid 
                item 
                container
                direction="column"
                justify="center"
                alignItems="center"
                 md={7}
                 className={classes.image}>
                
               <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
                   <strong> Simplificando a forma de conectar desenvolvedores de software!</strong>
               </Typography>
               <Typography variant="body2" style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                   Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
               </Typography>

                </Grid>

                <Grid item md={5}>
                    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography variant="h5">
                            Acesso
                        </Typography>
                            <form className={classes.form}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}   
                                onChange={(event)=> setEmail(event.target.value)}                        
                                />
                                <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(event)=> setPassowrd(event.target.value)}
                                
                                />
                                <Button fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleSignIn}
                                >
                                    Entrar
                                </Button>

                                {
                                    errorMessage && 
                                    <FormHelperText error>
                                        {errorMessage}
                                        
                                    </FormHelperText>
                                }
                                <Grid container>
                                    <Grid item>
                                        <Link>
                                            Esqueceu sua senha?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link>
                                            Não tem uma conta? Registre-se!
                                        </Link>
                                    </Grid>

                                </Grid>


                            </form>
                            <Copyright />

                    
                    </Box>
                </Grid>


            </Grid>


        /* Flex Container */
        
      //  <div className={classes.root}> 
           // {/* Flex item container */}
          //  <div className={classes.left}>
              //  <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
                 //   <strong> Simplificando a forma de conectar desenvolvedores de software!</strong>
               // </Typography>
               // <Typography variant="body2" style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                  //  Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
             //   </Typography>
           //  </div>
          //      <div className={classes.right}>   
             //   <form className={classes.form}>
              //      <h4> Acesso</h4>
                //    <input type="text"/>
                //    <input type="text"/>
               // </form>
           // </div>
        //</div> 
    );
}

export default SignIn;