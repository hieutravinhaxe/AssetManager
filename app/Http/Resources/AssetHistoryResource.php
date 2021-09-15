<?php

namespace App\Http\Resources;
use App\Helper\Date;
use Illuminate\Http\Resources\Json\JsonResource;

class AssetHistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'assigned_to' => $this->assignedToUser->id,
            'to_username' => $this->assignedToUser->username,
            'assigned_by' => $this->assigned_by,
            'by_username' => $this->assignedByUser->username,
            'assign_date' => Date::standardizedFormat($this->assign_date),
            'returned_date' => Date::standardizedFormat($this->returning->returned_date),
        ];
    }
}
