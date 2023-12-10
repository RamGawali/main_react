import { Carousel } from "react-bootstrap";

export function Slidebar() {
    return (
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.librarywala.com/banner/3641688194313.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-50 w-100"
          src="https://images.librarywala.com/banner/7571688194486.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.librarywala.com/banner/3391688194271.jpg"
        />
      </Carousel.Item>
    </Carousel>
    )
}