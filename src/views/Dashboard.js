import React, { useState, useEffect } from "react";
import styled from 'styled-components'; 
import LoadingCircle from './LoadingCircle'; // Ajusta la ruta según la ubicación real del componente
import fondo from '../imagenes/fondo.png';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WhiteBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 100;
  border: 1px solid red; /* Añade un borde rojo para verificar la posición y tamaño */
  display: ${(props) => (props.loading === 'true' ? 'block' : 'none')};
`;

const StyledLoadingCircle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102; /* Asegura que el StyledLoadingCircle esté encima del WhiteBackground */
`;

const StyledImage = styled.img`
  width: 100vw;
  height: auto;

`;

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 700)); // Ajusta el tiempo según sea necesario
      setLoading(false);
    };
  
    loadData();
  }, []);

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
      <CssBaseline />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StyledImage src={fondo} alt="" />
        <WhiteBackground loading={loading.toString()} />
        {loading && <StyledLoadingCircle />} {/* Muestra el LoadingCircle solo cuando loading es true */}
        <div>{/* Contenido adicional */}</div>
      </Box>
    </Container>
  );  
};

export default Dashboard;
