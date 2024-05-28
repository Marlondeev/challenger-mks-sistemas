import React from "react";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const SkeletonCard = styled.div`
  width: 200px;
  height: 300px;
  background: #ccc;
  border-radius: 8px;
`;

const Skeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      {[...Array(8)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </SkeletonContainer>
  );
};

export default Skeleton;
