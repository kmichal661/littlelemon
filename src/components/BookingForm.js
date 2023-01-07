import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Badge,
  HStack,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState , useEffect, useReducer } from "react";
import { useNavigate } from "react-router";

import * as Yup from 'yup';
import {fetchAPI, submitAPI }from '../utils';


export default function BookingForm(){

    const navigate = useNavigate()    

    const [availableTimes, setAvailableTimes] = useState([])

    const availableTimeOptions = availableTimes.map((i) => <option>{i}</option> )


    const formik = useFormik({

        initialValues: {
            resdate: "",
            restime: "18:00",
            guests: 1,
            occasion: "Birthday"

        },
        onSubmit: (values) => {
            let submission = submitAPI(values)
            if(submission){
                navigate('/booking/confirmed', {state: {
                    resdate: values.resdate,
                    restime: values.restime,
                    guests: values.guests,
                    occasion: values.occasion
                }})
            }
        },
        validationSchema: Yup.object().shape({
            resdate: Yup.string().required("Required"),
            restime: Yup.string().required("Required"),
            guests: Yup.number().max(10, "Maximum Table Size is 10").min(1, "Minimum Table size is 1").required("Required"),
            occasion: Yup.string().required("Required")
        }),

    })

    useEffect(() => {
        setAvailableTimes(fetchAPI( new Date(formik.values.resdate) ))
    }, [formik.values.resdate])


    return(
<>
<div className="tableBookingHeader">
        <h1>Book a Table</h1>
    </div>
<VStack p={24} alignItems="flex-center">
    
<form onSubmit={formik.handleSubmit}>
    <FormControl isInvalid={formik.errors.resdate && formik.touched.resdate}>
        <FormLabel htmlFor="resdate">Choose date</FormLabel>
        <Input 
        type='date' 
        id="resdate"
        value={formik.values.date}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        ></Input>

        <FormErrorMessage>{formik.errors.resdate && formik.touched.resdate ? formik.errors.resdate : <></>}</FormErrorMessage>

    </FormControl>

    <FormControl isInvalid={formik.errors.restime && formik.touched.restime}>
        <FormLabel htmlFor="restime">Choose Time</FormLabel>
        <Select 
        id='restime'
        value={formik.values.restime}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        >

            {availableTimeOptions}

        </Select>

        <FormErrorMessage> {formik.errors.restime && formik.touched.restime ? formik.errors.restime : <></>} </FormErrorMessage>
        <HStack style={{marginTop: "1rem",marginBottom: "1rem"}}>
            {availableTimes.map(i => <Badge
             colorScheme="yellow" 
             variant="outline" 
             style={{paddingLeft: "0.6rem",paddingRight: "0.6rem", cursor: "pointer"}}
             value={i}
             key={i}
             onClick={(e) => { formik.setFieldValue("restime", i)} }
             >{i}</Badge>)}
        </HStack>

    </FormControl>


    <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
        <FormLabel htmlFor="guests">Number Of Guests</FormLabel>
        <Input 
        type="number" 
        placeholder="1" 
        min="1"
        max="10"
        id="guests"
        value={formik.values.guests}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

        <FormErrorMessage>{formik.errors.guests && formik.touched.guests ? formik.errors.guests : <></>}</FormErrorMessage>
    </FormControl>


    <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select 
        id="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        
        >
            <option>Birthday</option>
            <option>Anniversary</option>
        </Select>

        <FormErrorMessage>{formik.errors.occasion && formik.touched.occasion ? formik.errors.occasion : <></>}</FormErrorMessage>

    </FormControl>
        <br/>
    <Button type="submit" colorScheme="yellow" width="full">Book Now</Button>
</form>
</VStack>


{/* <hr /> */}


            {/* <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date"/>
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"/>
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
</form> */}

</>
   )
}