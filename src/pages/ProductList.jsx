import styled from "styled-components";
import Product from "./Product"
import Announcement from "../components/Announcement";
import {mobile} from "../responsive"

const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display:"flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue="Color">
            <Option disabled value="Color">
              Color
            </Option>
            <Option value="red">red</Option>
            <Option value="blue">blue</Option>
            <Option value="green">green</Option>
            <Option value="yellow">yellow</Option>
            <Option value="black">black</Option>
            <Option value="white">white</Option>
          </Select>
          <Select defaultValue="Size">
            <Option disabled value="Size">
              Size
            </Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select defaultValue="Newest">
            <Option value="Newest">Newest</Option>
            <Option value="Price(asc)">Price(asc)</Option>
            <Option value="Price(desc)">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
    </Container>
  );
};

export default ProductList;