'use client'
import styled from 'styled-components';
import React, {DetailedHTMLProps, ReactNode, TableHTMLAttributes} from "react";
const StyledTable = styled.table`
  padding-left: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  border-collapse: collapse;
  th, td {
    padding: 10px;
  }

   th, td{
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
   th{
    background-color: #FFFFFF;
     font-weight: bold;
    border-top:none;
  }
   td:first-child,.custom_tb th:first-child{
    border-left: none;
  }
   th:first-child{
    border-radius: 6px 0 0 0;
  }
   th:last-child{
    border-radius: 0 6px 0 0;
  }
   tr:last-child td:first-child{
    border-radius: 0 0 0 6px;
  }
   tr:last-child td:last-child{
    border-radius: 0 0 6px 0;
  }
`;

interface TableProps {
    children: ReactNode
}
export default function Table(props: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) {
    return (
        <div className="px-3">
            <StyledTable>
                {props.children}
            </StyledTable>
        </div>

    )
}
