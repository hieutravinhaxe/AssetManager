<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReportResource extends JsonResource
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
            'category_name' => $this->category_name,
            'total' => $this->total,
            'assigned' => $this->assigned,
            'available' => $this->available,
            'not_available' => $this->not_available,
            'waiting_for_recycling' => $this->waiting_for_recycling,
            'recycled' => $this->recycled,
        ];
    }
}
