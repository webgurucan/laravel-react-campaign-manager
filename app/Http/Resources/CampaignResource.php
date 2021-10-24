<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CampaignResource extends JsonResource
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
            'name' => $this->name,
            'from' => $this->from ? date('m/d/Y', strtotime($this->from)) : '',
            'to' => $this->to ? date('m/d/Y', strtotime($this->to)) : '',
            'total_budget' => $this->total_budget,
            'daily_budget' => $this->daily_budget,
            'creatives' => $this->creatives,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
