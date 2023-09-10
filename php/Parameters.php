<?php
class Parameters
{
    private string $x;
    private string $y;
    private string $r;

    public function __construct(string $x, string $y, string $r)
    {
        $this->x = $x;
        $this->y = $y;
        $this->r = $r;
    }

    private function check_x(): bool
    {
        if ($this->x !== strval(intval($this->x))){
            echo "Параметр X не является натуральным числом";
            return false;
        }
        if ((int)$this->x < -5 || (int)$this->x > 5){
            echo "Параметр X не лежит в пределах [-5; 5]";
            return false;
        }
        return true;
    }
    private function check_y(): bool
    {
        if (!is_numeric($this->y)){
            echo "Параметр Y не является числом";
            return false;
        }
        if ($this->y < -3 || $this->y > 3){
            echo "Параметр Y не лежит в пределах [-3; 3]";
            return false;
        }
        return true;
    }
    private function check_r(): bool
    {
        if ($this->r !== strval(intval($this->r))){
            echo "Параметр R не является натуральным числом";
            return false;
        }
        if ($this->r < 1 || $this->r > 5){
            echo "Параметр R не лежит в пределах [1; 5]";
            return false;
        }
        return true;
    }

    public function checkParameters(): bool
    {
        return $this->check_x() && $this->check_y() &&
            $this->check_r();
    }

    public function checkInArea() : bool
    {
        return $this->y >= 0 && $this->x >= 0 && $this->r - $this->x >= $this->y ||
            $this->y <= 0 && $this->x <= 0 && $this->x >= -$this->r && $this->y >= -$this->r/2 ||
            $this->x <= 0 && $this->y >= 0 && $this->x**2 + $this->y**2 <= ($this->r/2)**2;
    }

    public function __toString() : string{
        return $this->x." ".$this->y." ".$this->r;
    }
    public function getArrayParameters() : array {
        return [$this->x, $this->y, $this->r];
    }
}