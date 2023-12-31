import { FilterContainer, FilterItems, Input } from "./PlacesFilterStyles";

const PlacesFilter = () => {
  return (
    <FilterContainer>
      <h3 style={{ fontSize: 25 }}>filter places</h3>
      <h5 style={{ fontSize: 20 }}>property type</h5>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>house</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>hostel</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>flat</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>villa</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>guest house</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <h5 style={{ margin: "1rem 0", fontSize: 20 }}>amenities</h5>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>air condition</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <FilterItems>
          <div>
            <Input type="checkbox" />
            <label style={{ marginLeft: 20 }}>wifi</label>
          </div>
          <div>(0)</div>
        </FilterItems>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>gym</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>pool</label>
        </div>
        <div>(0)</div>
      </FilterItems>
      <FilterItems>
        <div>
          <Input type="checkbox" />
          <label style={{ marginLeft: 20 }}>parking</label>
        </div>
        <div>(0)</div>
      </FilterItems>
    </FilterContainer>
  );
};

export default PlacesFilter;
