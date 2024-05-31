// interfaces.ts

export interface TeamMember {
  name: string;
  rank: string;
  profilePic: string;
}

export interface RentalTool {
  workOrder: string;
  toolRef: string;
  teamMember: TeamMember;
  status: string;
  duration: string;
}

export interface WorkOrderStatus {
  completed: number;
  inProgress: number;
  due: number;
}

export interface MissingItem {
  toolRef: string;
  teamMember: TeamMember; 
}

export interface ToolsAvailability {
  rentalItems: number;
  spareParts: number;
}

export interface RestockItem {
  toolRef: string;
  toolEquipment: string;
  stockStatus: string;
}

export interface ReceptionSummary {
  receivedItems: number;
  pendingItems: number;
}
