import styled from "styled-components";

export const ContactItem = (props) => {
  return (
    (
      <ListItem key={props.id}>
        Name: {props.name} Phone: {props.number}
        <DeleteButton type="button" onClick={() => props.children.onDeleteContact(props.id)}>
          Delete
        </DeleteButton>
      </ListItem>
    )
  );
};

const DeleteButton = styled.button`
display: block;
  margin-right: 0;
  margin-left: auto;
  font-size: 20px;

`
const ListItem = styled.li`
  display: flex;
  align-items: center;
`