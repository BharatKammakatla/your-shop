import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { DirectoryContainer } from "./directory.styled";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProops }) => (
      <MenuItem key={id} {...otherSectionProops} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
