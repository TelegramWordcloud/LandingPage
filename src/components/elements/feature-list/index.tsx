import styled from "styled-components";
import _ from "lodash";
import shortid from "shortid";
import {ReactElement} from "react";

interface IFeatureListProps {
    features: ReactElement[];
    iconSRC?: string;
}

const List = styled.ul`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const ListItem = styled.li`
    width: 100%;
    display: flex;
    gap: 10px;
`;

const ListImage = styled.img`
    height: 20px;
`;

const FeatureList = (props: IFeatureListProps) => {
    return (
        <List>
            {
                _.map(props.features, (feature) => (
                    <ListItem key={shortid.generate()}>
                        {
                            props.iconSRC !== undefined ?
                                <ListImage src={props.iconSRC} alt={"List icon"}/> :
                                <></>
                        }
                        {feature}
                    </ListItem>
                ))
            }
        </List>
    )
}

export default FeatureList;