#!/usr/bin/env python3
"""
Binx AI User DTO

Author: Northwind AI <northwindai.org>
Date: 2026-07-26
"""

from abc import ABC, abstractmethod
from datetime import datetime
from enum import Enum
from .utils import PlanTier, MemorySnapshot

class UserDto(ABC):
    id: str
    phone_number: str
    display_name: str
    locale: str
    timezone: str
    # free | pro | business
    plan: PlanTier
    credit_balance: float
    message_count: int
    is_blocked: bool
    last_active_at: datetime
    created_at: datetime
    updated_at: datetime    

    @abstractmethod
    def deduct_credits(self, amount: float) -> None:
        pass

    @abstractmethod
    def has_sufficient_credits(self, cost: float) -> bool:
        pass

    @abstractmethod
    def reset_monthly_usage(self) -> None:
        pass

    @abstractmethod
    def upgrade_plan(self, tier: PlanTier) -> None:
        pass

    @abstractmethod
    def record_activity(self) -> None:
        pass

    @abstractmethod
    def get_memory_context(self) -> MemorySnapshot:
        pass

    @abstractmethod
    def can_send_message(self) -> bool:
        pass
    
    