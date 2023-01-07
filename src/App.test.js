import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import {BrowserRouter} from 'react-router-dom'
import Nav from './Views/Nav'
import MainHead from './components/MainHead'
test('Renders the MainHead heading', () => {
    render(
      <MainHead />
    );
    const headingElement = screen.getByText("Little Lemon");
    const subHeadingElement = screen.getByText("Chicago")
    expect(headingElement).toBeInTheDocument();
    expect(subHeadingElement).toBeInTheDocument();
})

test("Test The Navigation Elements", () => {
  render(
    <BrowserRouter><Nav /></BrowserRouter>
  
  )
  const homeElement = screen.getByText("Home")
  const aboutElement = screen.getByText("About")
  const menuElement = screen.getByText("Menu")
  const reservationsElement = screen.getByText("Reservations")
  const orderOnlineElement = screen.getByText("Order Online")
  const loginElement = screen.getByText("Login")
  expect(homeElement).toBeInTheDocument()
  expect(aboutElement).toBeInTheDocument()
  expect(menuElement).toBeInTheDocument()
  expect(reservationsElement).toBeInTheDocument()
  expect(orderOnlineElement).toBeInTheDocument()
  expect(loginElement).toBeInTheDocument()
})

test("Test The Booking Form", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )
  const submit = screen.getByText("Book Now")
  expect(submit).toBeInTheDocument()

} )

