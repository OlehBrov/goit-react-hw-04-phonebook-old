import styled from 'styled-components';

export const ContactItem = props => {
  return (
    <ListItem key={props.id}>
      Name: {props.name} Phone: {props.number}
      <DeleteButton
        type="button"
        onClick={() => props.onDeleteContact(props.id)}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
};

const DeleteButton = styled.button`
  display: block;
  margin-right: 0;
  margin-left: auto;
  font-size: 20px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
`;
