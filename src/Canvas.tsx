import React from "react";
import styled from "styled-components";

interface CanvasProps {
  children: React.ReactNode
}

const Canvas = styled.div<CanvasProps>`
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`

export default Canvas
