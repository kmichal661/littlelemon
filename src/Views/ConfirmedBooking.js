import {useLocation} from 'react-router-dom';
import {Card, CardHeader, Heading, Stack, Box, StackDivider, CardBody, Text} from "@chakra-ui/react"


function ConfirmedBooking(){

    const location  = useLocation()
    console.log(location)
    return(
        <>

<Card style={{textAlign: "center", marginTop: "2rem"}}>
  <CardHeader>
    <Heading size='md'>Reservation Confirmation</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Date And Time
        </Heading>
        <Text pt='2' fontSize='sm'>
          {location.state.resdate} -- {location.state.restime}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Occasion
        </Heading>
        <Text pt='2' fontSize='sm'>
          {location.state.occasion}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Number of Guests
        </Heading>
        <Text pt='2' fontSize='sm'>
          {location.state.guests}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
        
        </>
    )
}

export default ConfirmedBooking