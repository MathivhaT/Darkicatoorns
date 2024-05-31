"use client";
import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  Button,
  Avatar,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface DataObject {
  [key: string]: any;
}

interface TableProps {
  data: DataObject[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Card>
        <p>No data available.</p>
      </Card>
    );
  }

  const renderIcon = (key: string, value: any) => {
    switch (key) {
      case "teamMember":
        const teamMember = value as {
          name: string;
          rank: string;
          profilePic: string;
        };
        return (
          <Avatar
            src={teamMember.profilePic}
            alt={teamMember.name}
            className="mr-2 w-5 h-5"
          />
        );
      case "status":
        return renderStatusIcon(value);
      default:
        return null;
    }
  };

  const renderStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <FiberManualRecordIcon className="text-green-500" />;
      case "not started":
        return <FiberManualRecordIcon className="text-red-500" />;
      case "in progress":
        return <FiberManualRecordIcon className="text-blue-500" />;
      default:
        return null;
    }
  };

  const getCellValue = (key: string, value: any) => {
    if (key === "teamMember") {
      const teamMember = value as {
        name: string;
        rank: string;
        profilePic: string;
      };
      return (
        <span className="flex items-center">
          {renderIcon(key, value)}
          <span className="ml-2">
            {teamMember.name} {teamMember.rank}
          </span>
        </span>
      );
    } else if (key === "status") {
      return (
        <span className="flex items-center">
          {renderIcon(key, value)}
          <span className="ml-2">{value}</span>
        </span>
      );
    } else {
      return value;
    }
  };

  return (
    <TableContainer className="">
      <MuiTable className="min-w-full divide-y divide-gray-200">
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell
                key={key}
                className="`px-6 py-3 text-left text-sm/[9px] font-medium text-gray-400 capitalize tracking-wider ${key === 'toolRef' ? 'bg-gray-200' : ''}`"
              >
                {key === "teamMember" ? "Team Member" : key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <TableRow key={index}>
              {Object.entries(row).map(([key, value], idx) => (
                <TableCell
                  key={idx}
                  className="text-xs  whitespace-nowrap"
                >
                  <span className={key === "toolRef" ? "bg-gray-200 px-6 py-1 " : ""}>
                    {getCellValue(key, value)}
                  </span>{" "}
                </TableCell>
              ))}
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <Button size="small" variant="contained" color="primary">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
