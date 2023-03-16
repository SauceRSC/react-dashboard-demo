import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import TimelapseIcon from '@mui/icons-material/Timelapse';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Caja Entradas */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="105"
            subtitle="Entradas registradas en el dia"
            icon={
              <PeopleAltIcon
                sx={{ color: colors.greenAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>

        {/* Caja de ventas */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="27"
            subtitle="Ventas totales"
            icon={
              <ShoppingBagIcon
                sx={{ color: colors.greenAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>

        {/* Caja de tiempo medio */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12:30 minutos"
            subtitle="Tiempo Medio de duracion"
            icon={
              <TimelapseIcon
                sx={{ color: colors.greenAccent[600], fontSize: "36px" }}
              />
            }
          />
        </Box>

        {/* Grafico 1 lineas*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Entradas:
              </Typography>
              <Typography
                variant="h2"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                105
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        

        {/* Grafico 2 barras */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Ventas:
              </Typography>
              <Typography
                variant="h2"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                27
              </Typography>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
