import {
  RentalTool,
  WorkOrderStatus,
  MissingItem,
  ToolsAvailability,
  RestockItem,
  ReceptionSummary,
  TeamMember
} from '../interfaces/interfaces';

// Fictional profile pictures and emojis for ranks
const profilePictures: Record<string, string> = {
  'Alex Noman': 'https://randomuser.me/api/portraits/men/1.jpg',
  'Razib Rahman': 'https://randomuser.me/api/portraits/men/2.jpg',
  'Luke Norton': 'https://randomuser.me/api/portraits/men/3.jpg'
};

const rankEmojis: Record<string, string> = {
  'Alex Noman': '🥇',
  'Razib Rahman': '🥈',
  'Luke Norton': '🥉'
};

// Mock service to fetch data
export const fetchRentalTools = async (): Promise<RentalTool[]> => {
  return [
    { workOrder: '01', toolRef: '6465', teamMember: createTeamMember('Alex Noman'), status: 'Completed', duration: '15:00' },
    { workOrder: '02', toolRef: '5665', teamMember: createTeamMember('Razib Rahman'), status: 'In Progress', duration: '05:00' },
    { workOrder: '03', toolRef: '1755', teamMember: createTeamMember('Luke Norton'), status: 'Not Started', duration: '00:00' }
  ];
};

export const fetchWorkOrderStatus = async (): Promise<WorkOrderStatus> => {
  return {
    completed: 7,
    inProgress: 3,
    due: 2
  };
};

export const fetchMissingItems = async (): Promise<MissingItem[]> => {
  return [
    { toolRef: '6465', teamMember: createTeamMember('Alex Noman') },
    { toolRef: '6466', teamMember: createTeamMember('Alex Noman') },
    { toolRef: '6467', teamMember: createTeamMember('Alex Noman') }
  ];
};

export const fetchToolsAvailability = async (): Promise<ToolsAvailability> => {
  return {
    rentalItems: 50,
    spareParts: 75
  };
};

export const fetchRestockItems = async (): Promise<RestockItem[]> => {
  return [
    { toolRef: '6465', toolEquipment: 'Screws', stockStatus: 'Low' },
    { toolRef: '6466', toolEquipment: 'Wires (electrical)', stockStatus: 'None' },
    { toolRef: '6467', toolEquipment: 'Bolts', stockStatus: 'None' }
  ];
};

export const fetchReceptionSummary = async (): Promise<ReceptionSummary> => {
  return {
    receivedItems: 120,
    pendingItems: 30
  };
};

// Helper function to create team member with fictional profile picture and rank emoji
const createTeamMember = (name: string): TeamMember => {
  return {
    name: name,
    profilePic: profilePictures[name],
    rank: rankEmojis[name]
  };
};
