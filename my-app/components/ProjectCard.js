// ProjectCard.js
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";

export default function ProjectCard({ title, desc, img, direction = "left" }) {

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : 80,   // slide from left or right
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={variants}
    >
      <Card
        style={{
          width: "20rem",
          border: "none",
          backgroundColor: "#334155",
          color: "white",
        }}
      >
        {img && (
          <Card.Img variant="top" src={img} style={{ height: "180px", objectFit: "cover" }} />
        )}

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
